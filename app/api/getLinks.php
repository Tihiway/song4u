<?php
include ("../resources/phpcrawl/simple_html_dom.php");
$html=file_get_html("https://www.youtube.com/results?search_query=pink+floyd");
$links = $html->find("div#yt-thumb video-thumb",0)->innertext;
//yt-thumb video-thumb
echo $links;