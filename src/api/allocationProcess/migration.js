import request from '@/utils/request';
import { MES_USER, MES_EQUIPMENT, MES_FILE, MES_ACTIVITI } from '@/common';

// 表格
export function fetchListdsy(query) {
    return request({
        url: MES_EQUIPMENT + 'equipment/allocation/list',
        method: 'get',
        params: query
    })
}


// 根据id查询的（编辑刚打开的页面）查询详情也是这个接口
export function evaluate(id) {
    return request({
      url: MES_EQUIPMENT + "equipment/allocation/detail/" + id,
      method: "get",
      params: {

      }
    });
}


// 删除 
export function fetchPv(id) {
    return request({
      url: MES_EQUIPMENT + "equipment/allocation/delete/" + id,
      method: "delete",
      params: {

      }
    });
}

// 流转记录的接口
export function circuList(processInstanceId) {
    return request({
        url: MES_ACTIVITI + 'activiti/selectHistoryTask/' + processInstanceId,
        method: 'get',
        params: {

        }
    })
}



// 获取当前用户信息
export function getCurrentUser() {
    return request({
        url: MES_USER + 'sys/user/getCurrentUser',
        method: 'get'
    })
}


// 保存按钮的接口 POST /equipment/allocation/save
export function conservation(data) {
    return request({
      url: MES_EQUIPMENT + "equipment/allocation/save",
      method: "post",
      data
    });
}

// 提交按钮的接口 POST /equipment/allocation/submit
export function referto(data) {
    return request({
      url: MES_EQUIPMENT + "equipment/allocation/submit",
      method: "post",
      data
    });
}


//引用设备调拨单接口 
export function fetchList(query) {
         return request({
           url: MES_EQUIPMENT + "equipment/allocation/list/equip",
           method: "get",
           params: query
         });
       }

// 使用部门的树接口  GET /sys/organization/orgCompanyByCode
export function dendrogram(query) {
    return request({
      url: MES_USER + "sys/organization/orgCompanyByCode",
      method: "get",
      params: query
    });
}

// 打印
export function selist(id) {
    return request({
        url: MES_EQUIPMENT + 'equipment/allocation/transferRecord/' + id,
        method: 'get',
        params: {

        }
    })
}

// 流程图 GET /activiti/process/trace/auto/{processInstanceId}
export function flowsheet(processInstanceId) {
    return request({
        url: MES_ACTIVITI + 'activiti/process/trace/auto/' + processInstanceId,
        method: 'get',
        params: {

        }
    })
}
