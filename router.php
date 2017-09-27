<?php
$datos = [
  [
  'id' => 0,
  'nombre' => 'juan',
  'edad' => '26'
  ],
  [
  'id' => 1,
  'nombre' => 'Pedro',
  'edad' => '34'
  ],
  [
  'id' => 2,
  'nombre' => 'Rocio',
  'edad' => '54'
  ]
];

if (isset($_SERVER)) {

  $base = $_SERVER;

  if (isset($base['PATH_INFO'])) {

    $path = $base['PATH_INFO'];
    $method = $base['REQUEST_METHOD'];

    if ($path == '/datos' && $method == 'GET') {
      echo json_encode($datos);
    }else if($path == '/datos/1' && $method == 'GET') {
      echo json_encode($datos[0]);
    }
  }
}
 ?>
