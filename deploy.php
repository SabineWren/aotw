<?php
try {
     	$payload = json_decode($_REQUEST['payload']);
	//echo 'payload->ref === ';
	//echo "$payload->ref\n";
}
catch(Exception $e) {
	$log_file_error = fopen("logs/error_github", "a+");
	if(!$log_file_error){
		print_r(error_get_last());
	}
	
	fwrite($log_file_error, $_REQUEST['payload']);
	fwrite($log_file_error,"\n");
	fwrite($log_file_error, var_dump($e->getMessage()) );
	
	fclose($log_file_error);
	exit(0);
}

//logging requires -x on logs/ and -w on logs/github
$log_file = fopen("logs/github", "a+");
if(!$log_file){
	print_r(error_get_last());
}
fwrite($log_file, $_REQUEST['payload']);
fclose($log_file);

//update production build
if ($payload->ref === 'refs/heads/master') {
	exec('./deploy.sh');
	$last_error = error_get_last();
	if($last_error !== NULL){
		$log_file_error = fopen("logs/error_github", "a+");
		fwrite($log_file_error,"$last_error");
		fclose($log_file_error);
	}
}
?>
