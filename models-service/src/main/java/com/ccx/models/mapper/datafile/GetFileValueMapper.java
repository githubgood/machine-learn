package com.ccx.models.mapper.datafile;

import com.ccx.models.model.datafile.ModelsDataFile;
import com.ccx.models.model.datafile.ModelsFileInfo;
import com.ccx.models.model.datafile.ModelsFileRowValue;
import com.ccx.models.model.datafile.ModelsFileValue;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * @author Created by xzd on 2017/11/22.
 * @Description 公共方法获取文件数据
 */
public interface GetFileValueMapper {
    ModelsDataFile findById(@Param("id") Integer id);

    //通过数据文件id查询文件中变量的值
    List<ModelsFileInfo> findFileInfoByDataFileId(@Param("dataFileId") Integer dataFileId);

    /**
     * 通过数据文件查询文件信息和文件变量信息以及变量值
     * @param dataFileId
     * @param limitNumber 查询多少条数据
     * @return
     */
    List<ModelsFileValue> findFileValueByDataFileId(@Param("dataFileId") Integer dataFileId, @Param("limitNumber") Integer limitNumber);

    /**
     * 通过数据文件查询文件信息和文件变量值
     * @param dataFileId
     * @return
     */
    List<ModelsFileRowValue> findFileRowValueByDataFileId(@Param("dataFileId") Integer dataFileId);

}
