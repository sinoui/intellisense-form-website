---
id: custom-css-pc
title: 表单应用支持自定义样式的元素
---

## 应用级别

### sinoform-app-inited

body 标签的 className

![image-20200707154920948](/img/custom-css/1_body.png)

### sinoform-app

草稿、待办、已办、查询列表、单表单页面和单应用页面组件的根元素的 className

![image-20200713113851891](/img/custom-css/2_app.png)

## 单表单页面或单应用

### sinoform-single-page-header

单表单或单应用页面头部应用栏的 className

![image-20200707155822718](/img/custom-css/3_single-page_header.png)

### sinoform-single-page-content

单表单或单应用页面中间内容区域的 className

![image-20200707160117672](/img/custom-css/4_single-page-content.png)

## 草稿列表

### sinoform-draft-page

草稿页面容器组件的 className，草稿列表所有的组件都是该组件的子元素。

![image-20200707160908479](/img/custom-css/5_draft-page.png)

### sinform-draft-page\_\_card

草稿列表每一个草稿项的 className

![image-20200707161911745](/img/custom-css/7_draft-page__card.png)

## 待办列表

### sinoform-todo-page

待办列表页面容器组件的 className，待办列表所有的组件都是该组件的子元素。

![image-20200707162359913](/img/custom-css/8_todo-page.png)

### sinoform-list\_\_searchform

待办列表、已办列表上方查询区域的 className

![image-20200714114627045](/img/custom-css/9_todo-page__searchform.png)

### sinoform-table

待办列表、已办列表、查询列表、无流程列表表格的 className

![image-20200707162706139](/img/custom-css/10_table.png)

### sinoform-table-head-cell

表格中表头单元格的 className

![image-20200707163235042](/img/custom-css/11_table__th.png)

### sinoform-table-cell

表格中数据单元格的 className

![image-20200707163500503](/img/custom-css/12_table__td.png)

## 已办列表

### sinoform-done-page

已办列表页面容器组件的 className，已办列表所有的组件都是该组件的子元素

![image-20200707165751780](/img/custom-css/13_done-page.png)

## 查询列表

### sinoform-search-page

查询列表页面容器组件的 className，查询列表所有的组件都是该组件的子元素

![image-20200707170115874](/img/custom-css/14_search-page.png)

### sinoform-search-page\_\_buttons-row

查询列表页面，`高级搜索`和`自定义列`按钮所在容器组件的 className

![image-20200707170358974](/img/custom-css/15_search-page__buttons-row.png)

### sinoform-search-page\_\_search-panel

查询列表页面，高级搜索展开后容器组件的 className

![image-20200707170506723](/img/custom-css/16_search-page__search-panel.png)

### sinoform-search-page-common-search

高级搜索常用搜索容器组件的 className

![image-20200707170748041](/img/custom-css/17_search-page-common-search.png)

### sinoform-search-page-common-search\_\_title

高级搜索常用搜索标题组件的 className

![ image-20200707171201661](/img/custom-css/18_search-page-common-search__title.png)

### sinoform-search-page-common-search\_\_items

高级搜索常用搜索项容器组件的 className

![image-20200707171313142](/img/custom-css/19_search-page-common-search__items.png)

### sinoform-search-page-common-search\_\_tip

没有常用搜索项的提示语组件的 className

![image-20200707172007663](/img/custom-css/20_search-page-common-search__tip.png)

### sinoform-search-page-search-item

高级搜索中每一行查询项的 className

![image-20200707172341720](/img/custom-css/21_search-page-common-search-item.png)

## 分页

### sinoform-table-pagination

分页组件容器的 className

![image-20200707173000961](/img/custom-css/23_table-pagination.png)

### sinoform-table-pagination\_\_total

分页总条数组件的的 className

![image-20200707173108306](/img/custom-css/24_table-pagination__total.png)

### sinoform-table-pagination\_\_number

分页切换和跳页组件容器的 className

![image-20200707173330334](/img/custom-css/25_table-pagination__number.png)

## 草稿、待办、已办、查询列表和无流程表单列表表格容器

### sinoform-data-table-layout

待办、已办、草稿、查询列表和无流程表单列表的容器组件都有该 className。

![image-20200707173852061](/img/custom-css/26_list-page.png)

## 起草和详情页面

### sinoform-detail-page\_\_title

详情页面标题组件的 className

![image-20200707174116663](/img/custom-css/26_detail-page__title.png)

### sinoform-detail-page\_\_title-text

详情页面标题文本的 className

![image-20200707174228752](/img/custom-css/28_detail-page__title-text.png)

### sinoform-detail-page\_\_body

详情页面表单区域和右侧操作区域的容器组件的 className

![image-20200707174515248](/img/custom-css/29_detail-page__body.png)

### sinoform-detail-page\_\_body-main

详情页面表单和按钮区域的 className

![image-20200714115245257](/img/custom-css/30_sinoform-detail-page__body-main.png)

### sinoform-detail-page\_\_body-main\_\_form

![image-20200714115359081](/img/custom-css/30_sinoform-detail-page__body-main__form.png)

### sinoform-detail-page\_\_body-main\_\_footer

详情页面底部按临时意见和操作按钮区域的 className

![image-20200714115649145](/img/custom-css/31_detail-page__body-main__footer.png)

### sinoform-flow-idea

详情页面底部按临时意见区域的 className

![image-20200708085329228](/img/custom-css/32_flow-idea.png)

### sinoform-detail-page-buttons-panel

详情页面底部按按钮区域的 className

![image-20200708085602265](/img/custom-css/33_detail-page-buttons-panel.png)

### sinoform-btn-{流程按钮 id}

各流程按钮的 className 为 sinoform-btn-前缀，{}中的文字为流程按钮的配置 id,因为 id 是可以在二次开发中扩展和修改的，所以在编写样式时，需要确定下当前各流程按钮的 id。举例说明，比如发送按钮的 id 为 submit，则发送按钮的 className 为 sinoform-btn-submit

![image-20200709161300009](/img/custom-css/33_sinoform-btn.png)

### sinoform-detail-page-body-aside

详情页面右侧边栏组件的 className

![image-20200708090109836](/img/custom-css/34_detail-page-body-aside.png)

### sinoform-flow-idea\_\_item

详情页面侧边栏审批意见项的 className

![image-20200708090422508](/img/custom-css/35_flow-idea__item.png)

### sinoform-flow-record\_\_item

详情页面侧边栏流程日志项的 className

![image-20200708091946280](/img/custom-css/36_flow-record__item.png)

### sinoform-side-sheet

流程图定位容器的 className

![image-20200708093301741](/img/custom-css/37_side-sheet.png)

### sinoform-flow-chart

流程图容器组件的 className

![image-20200708093535261](/img/custom-css/38_flow-chart.png)
