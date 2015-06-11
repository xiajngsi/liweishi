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
/*$('#modUserTable').on('all.bs.table', function (e, name, args) {
 console.log('Event:', name, ', data:', args);
 });*/
$('#modUserTable').bootstrapTable({

});
$('#userTable').bootstrapTable({

});
$('#leadsMod').bootstrapTable({

});
$('#announceTable').bootstrapTable({

});
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

function pencil(value, row, index) {
  return [
    '<a class="like" href="#userMod" data-toggle="modal" title="用户修改"><i class="icon-pencil"></i></a> '/*,
     '<a class="remove" href="javascript:void(0)" title="Remove">删除</a>',
     '<a class="remove" href="user-detail.html" title="Remove">详情</a>',*/
  ].join('');
}
function announceOpe(value, row, index) {
  return [
    '<a class="like" href="#userMod" data-toggle="modal" title="用户修改"><i class="icon-pencil"></i></a> ',
     '<a class="remove" href="javascript:void(0)" title="Remove"><i class="icon-remove"></i></a>',
     '<a class="remove" href="user-detail.html" title="Remove"><i class=" icon-book"></i></a>',
  ].join('');
}
function leadsMod(value, row, index) {
  return [
    '<a class="like" title="销售线索修改"><i class="icon-pencil"></i></a> '/*,
     '<a class="remove" href="javascript:void(0)" title="Remove">删除</a>',
     '<a class="remove" href="user-detail.html" title="Remove">详情</a>',*/
  ].join('');
}

/*function operateFormatter(value, row, index) {
  return [
    '<a class="like" href="user-modification.html" title="Like">修改</a> '*//*,
    '<a class="remove" href="javascript:void(0)" title="Remove">删除</a>',
    '<a class="remove" href="user-detail.html" title="Remove">详情</a>',*//*
  ].join('');
}*/

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


/*$(function () {*/
  /*增加用户图表*/
  console.log("enter table");
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
      }
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


/*月度平台销售走势图*/
  $('#platSaleChat').highcharts({
    title: {
      text: '月度平台销售走势图',
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

  /*6月平台数量分析图*/

    var colors = Highcharts.getOptions().colors,
      categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
      name = 'Browser brands',
      data = [{
        y: 55.11,
        color: colors[0],
        drilldown: {
          name: 'MSIE versions',
          categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0'],
          data: [10.85, 7.35, 33.06, 2.81],
          color: colors[0]
        }
      }, {
        y: 21.63,
        color: colors[1],
        drilldown: {
          name: 'Firefox versions',
          categories: ['Firefox 2.0', 'Firefox 3.0', 'Firefox 3.5', 'Firefox 3.6', 'Firefox 4.0'],
          data: [0.20, 0.83, 1.58, 13.12, 5.43],
          color: colors[1]
        }
      }, {
        y: 11.94,
        color: colors[2],
        drilldown: {
          name: 'Chrome versions',
          categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
            'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'],
          data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
          color: colors[2]
        }
      }, {
        y: 7.15,
        color: colors[3],
        drilldown: {
          name: 'Safari versions',
          categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
            'Safari 3.1', 'Safari 4.1'],
          data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
          color: colors[3]
        }
      }, {
        y: 2.14,
        color: colors[4],
        drilldown: {
          name: 'Opera versions',
          categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
          data: [ 0.12, 0.37, 1.65],
          color: colors[4]
        }
      }];

    function setChart(name, categories, data, color) {
      chart.xAxis[0].setCategories(categories, false);
      chart.series[0].remove(false);
      chart.addSeries({
        name: name,
        data: data,
        color: color || 'white'
      }, false);
      chart.redraw();
    }

    var chart = $('#platAnalysisChat').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Browser market share, April, 2011'
      },
      subtitle: {
        text: 'Click the columns to view versions. Click again to view brands.'
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      plotOptions: {
        column: {
          cursor: 'pointer',
          point: {
            events: {
              click: function() {
                var drilldown = this.drilldown;
                if (drilldown) { // drill down
                  setChart(drilldown.name, drilldown.categories, drilldown.data, drilldown.color);
                } else { // restore
                  setChart(name, categories, data);
                }
              }
            }
          },
          dataLabels: {
            enabled: true,
            color: colors[0],
            style: {
              fontWeight: 'bold'
            },
            formatter: function() {
              return this.y +'%';
            }
          }
        }
      },
      tooltip: {
        formatter: function() {
          var point = this.point,
            s = this.x +':<b>'+ this.y +'% market share</b><br/>';
          if (point.drilldown) {
            s += 'Click to view '+ point.category +' versions';
          } else {
            s += 'Click to return to browser brands';
          }
          return s;
        }
      },
      series: [{
        name: name,
        data: data,
        color: 'white'
      }],
      exporting: {
        enabled: false
      }
    })
     /* .highcharts();*/ // return chart
  /*  销量图*/
    $('#salesVolumeChar').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Browser market shares at a specific website, 2010'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
          ['Firefox',   45.0],
          ['IE',       26.8],
          {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
          },
          ['Safari',    8.5],
          ['Opera',     6.2],
          ['Others',   0.7]
        ]
      }]
    });

/*});*/

$(".")

