/**
 * Created by candice on 2015/6/3.
 */

// This function is called from the pop-up menus to transfer to
// a different page. Ignore if the value returned is a null string:
function goPage (newURL) {

  // if url is empty, skip the menu dividers and reset the menu selection to default
  if (newURL != "") {

    // if url is "-", it is this page -- reset the menu:
    if (newURL == "-" ) {
      resetMenu();
    }
    // else, send page to designated URL
    else {
      document.location.href = newURL;
    }
  }
}

/*表格加载*/
$('#utable').bootstrapTable({
});
$('#stable').bootstrapTable({
});
$('#channeltable').bootstrapTable({
});
$('#addedchannaltable').bootstrapTable({
});
$('#salestable').bootstrapTable({
});

function operateFormatter(value, row, index) {
  return [
    '<a class="like" href="user-modification.html" title="Like">修改</a> ',
    '<a class="remove" href="javascript:void(0)" title="Remove">删除</a>',
    '<a class="remove" href="user-detail.html" title="Remove">详情</a>',
  ].join('');
}

window.operateEvents = {
  'click .like': function (e, value, row, index) {
    alert('You click like action, row: ' + JSON.stringify(row));
  },
  'click .remove': function (e, value, row, index) {
    $table.bootstrapTable('remove', {
      field: 'id',
      values: [row.id]
    });
  }
};

// resets the menu selection upon entry to this page:
function resetMenu() {
  document.gomenu.selector.selectedIndex = 2;
}

/*增加用户图表的js*/
$(function () {
  $('#addUserChat').highcharts({
    title: {
      text: '本月新增用户数',
      x: -20 //center
    },
    xAxis: {
      categories: ['0', '2', '4', '6', '8', '10','12']
    },
    yAxis: {
      title: {
        text: '用户数'
      },
      plotLines: [{
        value: 1,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: '万户'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: '单店',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
    }, {
      name: '连锁店',
      data: [1, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8]
    }]
  });
});

