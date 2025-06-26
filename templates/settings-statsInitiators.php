/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
<?php
defined('ABSPATH') or die();
?>


<?php
// Stats based by initiator
// Stats på level (notice, warning, debug, etc.)
$sql = sprintf('
	SELECT 
		initiator,
		count(initiator) as count
	FROM %1$s
	GROUP BY initiator
	ORDER BY count DESC
	', $table_name);

$level_counts = $wpdb->get_results($sql);

echo '<h3>Initiators</h3>';
echo '<table>';
echo '<tr>
        <th>Initiator</th>
        <th>Count</th>
    </tr>';

foreach ($level_counts as $row) {
    if (empty($row->initiator)) {
        continue;
    }

    printf(
        '
		<tr>
			<td>%1$s</td>
			<td>%2$s</td>
		</tr>
		',
        $row->initiator,
        $row->count
    );
}

echo '</table>';
