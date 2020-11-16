jQuery(function($){

    let templateHtml = '';
    let is_not_contained = confirm("請確認輸入的字串是'不想在Facebook看到的'，不是想看到的：");
    let prompt_text = '';
    let code_contain = '';
    if(!is_not_contained){
        prompt_text = '';
        code_contain = ':not';
    }else{
        prompt_text = '不';
        code_contain = '';
    }
    var text = prompt("請輸入字串(多個字串請以此範例為主 \n 「靠北,韓國瑜」 )", "請輸入" + prompt_text + "想在FB貼文之中看到的字串");
    templateHtml = '此則貼文包含您不想看到的字串：' + text;
    //設定值 **TODO放在選項設定**

    let all_string = text.split(',');
    alert('您不想看到的為:'+ text);
    let count_hide = 0;
    $.each(all_string, function(key,value){
     
        //一開始
        if($('#stream_pagelet').length){
            if(count_hide == 0){count_hide = $('#stream_pagelet ' + code_contain + 'div:contains("' + value + '")').children('.userContentWrapper').length;}

            $('#stream_pagelet ' + code_contain + 'div:contains("' + value + '")').children('.userContentWrapper').html('<div style="text-align:center; font-size:35px; color:red;  font-weight:bold;">此篇已經隱藏了</div>');    
        }

    });

    if(count_hide > 0){
        console.log('恭喜：)您已經隱蔽了' + count_hide + '則貼文。');
    }
    count_hide = 0;
    $('#facebook').bind('DOMContentLoaded DOMSubtreeModified', function(){

        $.each(all_string, function(key,value){
            if(count_hide == 0){count_hide = $('#PagesProfileHomePrimaryColumnPagelet ' + code_contain + 'div:contains("' + value + '")').length;}

            $('#PagesProfileHomePrimaryColumnPagelet ' + code_contain + 'div:contains("' + value + '")').html('<div style="text-align:center; font-size:35px; color:red;  font-weight:bold;">此篇已經隱藏了</div>');
            $('#stream_pagelet ' + code_contain + 'div:contains("' + value + '")').children('.userContentWrapper').html('<div style="text-align:center; font-size:35px; color:red;  font-weight:bold;">此篇已經隱藏了</div>');    

        });

        if(count_hide > 0){
            console.log('恭喜：)您已經隱蔽了' + count_hide + '則貼文。');
        }
    });
    
});

