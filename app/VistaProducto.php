<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VistaProducto extends Model
{
    protected $table = 'vista_producto';
    protected $primaryKey = 'id_producto';
    //protected $fillable = ['descripcion'];

    public function ScopeProducto($query, $buscar)
    {
        if($buscar)
            return $query->orWhere('producto','like',"%$buscar%")
                         ->orWhere('categoria','like',"%$buscar%")
                         ->orWhere('marca','like',"%$buscar%");
    }
}
