<?php 
try {
  $payload = json_decode($_REQUEST['payload']);
}
catch(Exception $e) {
	file_put_contents(
		'./logs/error_github',
		print_r(
			var_dump($e->getMessage()),
			TRUE
		),
		FILE_APPEND
	);
	exit(0);
}

//log the request
file_put_contents('./logs/github', print_r($payload, TRUE), FILE_APPEND);

//update production build
if ($payload->ref === 'refs/heads/master') {
  exec('./deploy.sh');
}
?>
