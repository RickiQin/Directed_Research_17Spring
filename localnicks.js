$(document).ready(function(){
    $("#spot1").each(function(){
        var thisVal=$(this).val();
        if(thisVal!=""){
            $("#text1").css('color', 'transparent');
        }else{
            $("#text1").css('color', '#ffffff');
        }
        $(this).focus(function(){
//                 $(this).siblings(".suggest span").hide();
            $("#text1").css('color', 'transparent');
        }).blur(function(){
            var val=$(this).val();
            if(val!=""){
//                     $(this).siblings(".suggest span").hide();
                $("#text1").css('color', 'transparent');
            }else{
//                     $(this).siblings(".suggest span").show();
                $("#text1").css('color', '#ffffff');
            } 
        });
    });
    $("#spot2").each(function(){
        var thisVal=$(this).val();
        if(thisVal!=""){
            $("#text2").css('color', 'transparent');
        }else{
            $("#text2").css('color', '#ffffff');
        }
        $(this).focus(function(){
//                 $(this).siblings(".suggest span").hide();
            $("#text2").css('color', 'transparent');
        }).blur(function(){
            var val=$(this).val();
            if(val!=""){
//                     $(this).siblings(".suggest span").hide();
                $("#text2").css('color', 'transparent');
            }else{
//                     $(this).siblings(".suggest span").show();
                $("#text2").css('color', '#ffffff');
            } 
        });
    });
    $(document).on('click', '#text1', function(){
        var color = $(this).css('color');
        if(color=="rgb(255, 255, 255)"){
            $("#text1").css('color', 'transparent');
            $("#spot1").focus();
        }
    });
    $(document).on('click', '#text2', function(){
        var color = $(this).css('color');
        if(color=="rgb(255, 255, 255)"){
            $("#text2").css('color', 'transparent');
            $("#spot2").focus();
        }
    });
});

function countSpot(spot, count){
    var npt = document.getElementById(spot);
    var len = npt.value.length;
    document.getElementById(count).innerHTML = len;
}

function addCost(val){
    var str = document.getElementById("tour_cost").value;
    if(str==="$00.00"){
        if(val!="0" && val!="."){
            document.getElementById("tour_cost").value = "$" + val;
        }
    } else{
        document.getElementById("tour_cost").value = str + val;
    }
}

function backSpace(){
    var str = document.getElementById("tour_cost").value;
    var len = str.length;
    if(str!="$00.00"){
        if(len > 2){
            document.getElementById("tour_cost").value = str.substring(0, len - 1);
        }
        if(len == 2){
            document.getElementById("tour_cost").value = "$00.00";
        }
    }
}