<?php
include ("C:/Users/Milos/PhpstormProjects/song4u/resources/phpcrawl/simple_html_dom.php");
$html=file_get_html("http://www.wikihow.com/Live-in-Peace");
$links = $html->find("div#intro",0)->innertext;
//yt-thumb video-thumb
echo $links;