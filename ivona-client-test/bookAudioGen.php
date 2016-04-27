<?php
$filename = "GreatExpectations";
$book = file_get_contents("books/$filename.txt");
$splitbook = explode(".", $book);

$data = array();

$i = 1;

foreach ($splitbook as $sentence)
{
        echo "Processing $sentence\n";
        //$file = file_get_contents("http://localhost:3003/requestmp3/" . rawurlencode($sentence));
        //file_put_contents("./output/$filename$i.mp3", $file);
        $data[] = array(
                "id" => $i,
                "text" => $sentence,
                "filename" => "$filename$i.mp3",
                "data"  => base64_encode(file_get_contents("./output/$filename$i.mp3"))
        );
        $i++;
}

$bookarray = array(
        "Great Expectations" => $data
        );

$datajson = json_encode($bookarray, JSON_PRETTY_PRINT);

file_put_contents("output_data.json", $datajson);
?>