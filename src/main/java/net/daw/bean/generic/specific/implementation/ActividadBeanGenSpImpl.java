/*
 * Copyright (C) 2014 al037805
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package net.daw.bean.generic.specific.implementation;

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;
import java.util.Date;

/**
 *
 * @author al037805
 */
public class ActividadBeanGenSpImpl extends BeanGenImpl implements BeanInterface{
    
    public ActividadBeanGenSpImpl() {
    }

    public ActividadBeanGenSpImpl(Integer id) {
        super(id);
    }
    
       
    @Expose(deserialize = false)
    private TipoactividadBeanGenSpImpl obj_tipoactividad = null;
    
    @Expose(serialize = false) 
    private Integer id_tipoactividad = 0; //importante inicializar a 0 las claves ajenas
    
    @Expose
    private String descripcion = "";
    

    public Integer getId_tipoactividad() {
        return id_tipoactividad;
    }

    public void setId_tipoactividad(Integer id_tipoactividad) {
        this.id_tipoactividad = id_tipoactividad;
    }

    public TipoactividadBeanGenSpImpl getObj_tipoactividad() {
        return obj_tipoactividad;
    }

    public void setObj_tipoactividad(TipoactividadBeanGenSpImpl obj_tipoactividad) {
        this.obj_tipoactividad = obj_tipoactividad;
    }
    
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

   
}
