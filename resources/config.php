<?php
 

 
$config = array(
    "db" => array(
            "dbname" => "database1",
            "username" => "dbUser",
            "password" => "pa$$",
            "host" => "localhost"
        ),
        
    "urls" => array(
        "baseUrl" => "http://example.com"
    ),
    "paths" => array(
        "resources" => "/path/to/resources",
        "images" => array(
            "content" => $_SERVER["DOCUMENT_ROOT"] . "/images/content",
            "layout" => $_SERVER["DOCUMENT_ROOT"] . "/images/layout"
        )
    )
);
 

defined("LIBRARY_PATH")
    or define("LIBRARY_PATH", realpath(dirname(__FILE__) . '/library'));
     
defined("TEMPLATES_PATH")
    or define("TEMPLATES_PATH", realpath(dirname(__FILE__) . '/templates'));
 

 
?>