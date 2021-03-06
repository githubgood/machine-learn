<%@ page language="java" import="java.util.*" import="java.net.URLDecoder" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!-- 主体信息 start-->
<%--详细--%>
<div class="little_title">
    <h2 class="fl little_icon1">企业基本信息</h2>
</div>
<div class="info_minHeight">
    <div class="info_content">
        <table class="info_table">
            <tbody>
            <tr>
                <td><strong>企业名称</strong></td>
                <td><span>${enterprise.name}</span></td>
            </tr>
            <tr>
                <td><strong>代码标识</strong></td>
                <td>
                    <span>${enterprise.creditCode}</span>
                    <%--<c:if test="${enterprise.creditCodeType == 0}">
                        <span>统一社会信用代码-${enterprise.creditCode}</span>
                    </c:if>
                    <c:if test="${enterprise.creditCodeType == 1}">
                        <span>组织机构代码-${enterprise.creditCode}</span>
                    </c:if>
                    <c:if test="${enterprise.creditCodeType == 2}">
                        <span>事证号-${enterprise.creditCode}</span>
                    </c:if>--%>
                </td>
            </tr>
            <tr>
                <td><strong>行业</strong></td>
                <td><span>${enterprise.industry1Name}-${enterprise.industry2Name}</span></td>
            </tr>
            <tr>
                <td><strong>注册地址</strong></td>
                <td>
                    <input id="provinceId" name="provinceId" value="${enterprise.provinceId}" type="hidden"/>
                    <input id="cityId" name="cityId" value="${enterprise.cityId}" type="hidden"/>
                    <input id="countyId" name="countyId" value="${enterprise.countyId}" type="hidden"/>
                    <span id="regionSpan"></span>-<span>${enterprise.address}</span>
                </td>
            </tr>
            <tr>
                <td><strong>企业性质</strong></td>
                <td><span>${enterprise.natureName}</span></td>
            </tr>
            <tr>
                <td><strong>企业规模</strong></td>
                <td>
                    <c:if test="${enterprise.scale == 0}">
                        <span>大中型企业</span>
                    </c:if>
                    <c:if test="${enterprise.scale == 1}">
                        <%--<span>小微企业</span>--%>
                        <span></span>
                    </c:if>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <%--<div class="corporate_detail" style="display: none">
        <div class="little_title">
            <h2 class="fl little_icon2">法人／大股东（个人）信息</h2>
        </div>
        <div class="info_content">
            <table class="info_table">
                <tbody id="corporate_info">
                <tr>
                    <td><strong>姓名</strong></td>
                    <td><span>${enterprise.corporateName}</span></td>
                </tr>
                <tr>
                    <td><strong>手机号码</strong></td>
                    <td><span>${enterprise.corporatePhone}</span></td>
                </tr>
                <tr>
                    <td><strong style="width:80px">身份证号码</strong></td>
                    <td><span>${enterprise.corporateCid}</span></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>--%>
</div>
<!-- 主体信息 end -->
   