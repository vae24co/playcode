<?php

class Login
{
	public $name;

	public function __construct(&$name = 'Joe')
	{
		$this->name = $name;
	}


	public function user($username, $password)
	{
		return "<p>Your name is <strong>{$this->name}</strong>!<br>and you are logged in as <strong>$username</strong></p>";
	}

	public static function users($listOfUsers)
	{
		return "<p>Static Users: <strong>" . implode(', ', $listOfUsers) . "</strong></p>";
	}
}


class Auth
{
	public function __call($name, $arguments)
	{
		$class = new $name;
		$method = $arguments[0];
		unset($arguments[0]);
		return $class->$method(...$arguments);
	}



	// * CALL STATIC: Handles calls to Static Class Methods
	public static function __callStatic($name, $arguments)
	{
		$staticClass = ucwords($name);
		$staticClassMethod = $arguments[0];
		unset($arguments[0]);
		$staticClassMethodArgumens = $arguments;
		return $staticClass::$staticClassMethod(...$staticClassMethodArgumens);
	}
}


$myName = 'Deron Ellse';
$Login = new Login($myName);
echo '<h1>Class of Login</h1>';
echo $Login->user('iamodao', 'passcode');
echo Login::users(['Toni', 'Montana', 'Alero']);
echo '<hr>';


$Auth = new Auth();
echo '<h1>Class of Auth -> Login</h1>';
echo $Auth->login('user', 'iamodao', 'passcode');
echo Auth::login('users', ['Toni', 'Montana', 'Alero']);
echo '<hr>';
?>