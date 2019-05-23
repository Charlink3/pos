<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class fac_enc extends Model
{
    protected $table = 'fac_enc';
    protected $primaryKey = 'id_fac_enc';
    //protected $fillable = ['descripcion'];

    // public function ScopeNombre($query, $buscar)
    // {
    //     if($buscar)
    //         return $query->orWhere('nombre','like',"%$buscar%")
    //                      ->orWhere('nit','like',"%$buscar%")
    //                      ->orWhere('direccion','like',"%$buscar%");
    // }
    public function ScopeNombre($query, $buscar)
    {
        if($buscar)
            return $query->select('producto.id_producto as id, producto.descripcion as prod, marca.descripcion as marca, categoria.descripcion as categoria')
            			 ->join('marca','marca.id_marca','=','producto.id_marca')
            			 ->join('categoria','categoria.id_categoria','=','producto.id_categoria')
        				 ->orWhere('producto.descripcion','like',"%$buscar%")
                         ->orWhere('marca.descripcion','like',"%$buscar%")
                         ->orWhere('categoria.descripcion','like',"%$buscar%");
    }
}
