import request from '@/utils/request';
import { MES_USER, MES_EQUIPMENT, MES_FILE, MES_ACTIVITI } from '@/common';

// 表格
export function fetchListdsy(pageNum,pageSize,data) {
    return request({
        url: MES_EQUIPMENT + 'equipment/repair/quality/getEquipRepairQualityAcceptances'+ "?pageNum=" + pageNum + "&pageSize=" + pageSize,
        method: 'post',
        data
    })
}

// 删除
export function fetchPv(query) {
    return request({
      url: MES_EQUIPMENT + "equipment/repair/quality/delete",
      method: "delete",
      params: query
    });
}
 
//引用设备调拨单接口 
export function fetchsList(data) {
    return request({
      url: MES_EQUIPMENT + "equipment/basis/getAcceptanceDTO",
      method: "post",
      data
    });
}

// 新增提交  
export function addPost(userId, data) {
    return request({
        url: MES_EQUIPMENT + 'equipment/repair/quality/addPost' + "?userId=" + userId,
        method: 'post',
        data
    })
}

// 新增保存
export function addsave(data) {
    return request({
        url: MES_EQUIPMENT + 'equipment/repair/quality/save',
        method: 'post',
        data
    })
}



// 编辑提交
export function updateArticle(query) {
    return request({
      url: MES_EQUIPMENT + "equipment/repair/quality/upPost",
      method: "put",
      params: query
    });
}

//编辑保存 PUT /equipment/repair/quality/up

export function upAr(query) {
    return request({
        url: MES_EQUIPMENT + "equipment/repair/quality/up",
        method: "put",
        params: query
    });
}







// 根据id查询的（编辑刚打开的页面） 
export function evaluate(query) {
    return request({
        url: MES_EQUIPMENT + 'equipment/repair/quality/selectByPrimaryKey',
        method: 'get',
        params: query
    })
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

// 生成设备质保验收单按钮  
export function producePv(query) {
    return request({
        url: MES_EQUIPMENT + 'equipment/repair/quality/createAcceptanceRecord',
        method: 'get',
        params: query
    })
}



// 上传接口
export function uploadlist(param) {
    return request({ // 用axios发送post请求
        url: MES_FILE + 'file/upload', // 请求地址
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: param
    })
}

// 小表格接口
export function smallAblist(query) {
    return request({
        url: MES_EQUIPMENT + 'equipment/file/listFlowFile',
        method: 'get',
        params: query
    })
}

// 重新验收
export function createArticlest(data) {
    return request({
        url: MES_EQUIPMENT + 'equipment/acceptance/reAccept',
        method: 'post',
        data
    })
}

// 重新验收的小表格删除接口（文彪）
export function deleteapp(query) {
    return request({
        url: MES_FILE + 'file/delete',
        method: 'delete',
        params: query
    })
}

// 编辑的小表格删除接口（壮）
export function updeletedata(id) {
    return request({
        url: MES_EQUIPMENT + 'equipment/file/deleteFlowFile/' + id,
        method: 'delete',
        params: {

        }
    })
}

// 编辑查看新增文件  
export function insertFile(data) {
    return request({
        url: MES_EQUIPMENT + 'equipment/file/insertFlowFile',
        method: 'post',
        data
    })
}

// 获取当前用户信息
export function getCurrentUser() {
    return request({
        url: MES_USER + 'sys/user/getCurrentUser',
        method: 'get'
    })
}





