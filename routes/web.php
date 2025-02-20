<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//use App\Cliente;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('categorias','CategoriaController');

Route::resource('empresa','EmpresaController', ['except' => ['create', 'store', 'destroy']]);

Route::resource('usuarios','UserController');

Route::resource('facturas','FacturaController');
Route::get('facturas', 'FacturaController@index')->name('facturas');

Route::resource('clientes','ClienteController');

Route::resource('productos','ProductoController');


// Route::get('clientes',function(){
// 	$clientes = Cliente::get();
// 	return $clientes;
// });
