package com.ccx.models.service.impl.datafile;

import com.ccx.models.util.TimerConcurrentHashMap;
import com.ccx.models.mapper.datafile.GetFileValueMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * @author Created by xzd on 2017/11/22.
 * @Description 公共方法获取文件数据
 */
@Component
public class CommonGetFileValue {
    private Logger logger = LogManager.getLogger(CommonGetFileValue.class);

    private volatile Map<Integer, GetFileValue> dataValues = new TimerConcurrentHashMap<>(1000*60*10l,1000);

    @Autowired
    private GetFileValueMapper fileValueMapper;

    public CommonFileValue.DataFile getDataFile(Integer dataFileId, boolean isUpdate) {
        return getV(dataFileId, isUpdate, false).getDataFile();
    }

    public CommonFileValue.DataFile getCommonDataFile(Integer dataFileId, boolean isUpdate) {
        return getV(dataFileId, isUpdate, true).getDataFile();
    }

    private GetFileValue getV(Integer dataFileId, boolean isUpdate, boolean isRow) {
        GetFileValue value = null;
        if (isUpdate) {
            //如果更新了数据标记，则每次查询最新的数据
            dataValues.remove(dataFileId);
        }

        if(dataValues.get(dataFileId) == null){
            logger.info("获取数据文件，数据文件id为："+dataFileId);

            if (isRow) {
                value = new GetFileValue(fileValueMapper, dataFileId, isRow) {
                    @Override
                    public void initK() {}
                    @Override
                    public void initV() {}
                };
            } else {
                value = new GetFileValue(fileValueMapper, dataFileId, isRow) {
                    @Override
                    public void initK() {}

                    @Override
                    public void initV() {}
                };
            }

            dataValues.put(dataFileId, value);
            return value;
        }
        logger.info("获取数据文件缓存，数据文件id为Id："+dataFileId);
        return dataValues.get(dataFileId);
    }
}
