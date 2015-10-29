/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $('.menu > ul > li:has(ul.submenu) > a').click(function() {
            $(this).next('ul').slideToggle();
    });
    
    $('.menu > ul > li > ul > li:has(ul.sub-submenu) > a').click(function() {
            $(this).next('ul').slideToggle();
    });
});
