package com.ccx.models.api.dataexchange;

import com.ccx.models.bean.RecivePutOutBean;
import com.ccx.models.model.datafile.ModelsDataFile;

import java.util.Map;

/**
 * @Description:
 * @author:lilong
 * @Date: 2017/11/21
 */
public interface VariableExchangeService {

    Map<String,Object> saveForModelSend(ModelsDataFile file,String userName);

    Map<String,Object> saveData(RecivePutOutBean putOutBean, String userName);

   /* Map<String,Object> saveForModelSendTest(String bean);*/
}
