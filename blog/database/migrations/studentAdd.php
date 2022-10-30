<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateProductsTable extends Migration
{
/**
* Run the migrations.
*
* @return void
*/
public function up()
{
Schema::create('products', function (Blueprint $table) {
$table->string('Student Id');
$table->string('Name');
$table->string('Grade');
$table->string('Address');
$table->string('Town');
$table->string('Telephone Number');
$table->string('E-Mail');

});
}
/**
* Reverse the migrations.
*
* @return void
*/
public function down()
{
Schema::dropIfExists('products');
}
}