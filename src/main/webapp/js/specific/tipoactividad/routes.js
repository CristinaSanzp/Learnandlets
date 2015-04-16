/* 
 * Copyright (C) 2014 rafa
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


function fTipoactividadRoutes() {

//    Path.map("#/tipoactividad").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('tipoactividad').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //tipoactividadControl.modalListEventsLoading(tipoactividadObject, tipoactividadView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/tipoactividad").to(function () {
        $('#indexContenidoJsp').spinner();
        oTipoactividadControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oTipoactividadModel, oTipoactividadView);
        //tipoactividadControl.modalListEventsLoading(tipoactividadObject, tipoactividadView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oTipoactividadControl.getClassNameTipoactividad());
        return false;
    });

    Path.map("#/tipoactividad/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoactividadControl.list($('#indexContenido'), paramsObject, null, oTipoactividadModel, oTipoactividadView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipoactividad/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoactividadControl.view($('#indexContenido'), paramsObject['id'], oTipoactividadModel, oTipoactividadView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/tipoactividad/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoactividadControl.edit($('#indexContenido'), paramsObject['id'], oTipoactividadModel, oTipoactividadView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/tipoactividad/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoactividadControl.new($('#indexContenido'), null, oTipoactividadModel, oTipoactividadView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/tipoactividad/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoactividadControl.new($('#indexContenido'), paramsObject, oTipoactividadModel, oTipoactividadView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/tipoactividad/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oTipoactividadControl.remove($('#indexContenido'), paramsObject['id'], oTipoactividadModel, oTipoactividadView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}