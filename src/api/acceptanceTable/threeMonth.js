import request from '@/utils/request';
import {MES_USER,MES_EQUIPMENT} from '@/common';

// 表格
export function fetchList(data) {
  return request({
    url: MES_EQUIPMENT + 'equipment/plan/getThreeMonthPlan',
    method: 'post',
    data
  })
}



// 导出
export function derivationst(data) {
  return request({
    url: MES_EQUIPMENT + 'equipment/plan/getThreeMonthPlanPath',
    method: 'post',
    data
  })
}

