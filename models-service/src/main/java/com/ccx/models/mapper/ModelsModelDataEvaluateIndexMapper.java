package com.ccx.models.mapper;

import com.ccx.models.model.ModelsModelDataEvaluateIndex;

public interface ModelsModelDataEvaluateIndexMapper extends BaseMapper<ModelsModelDataEvaluateIndex>{
    int deleteByPrimaryKey(Long id);

    int insert(ModelsModelDataEvaluateIndex record);

    int insertSelective(ModelsModelDataEvaluateIndex record);

    ModelsModelDataEvaluateIndex selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(ModelsModelDataEvaluateIndex record);

    int updateByPrimaryKey(ModelsModelDataEvaluateIndex record);
}