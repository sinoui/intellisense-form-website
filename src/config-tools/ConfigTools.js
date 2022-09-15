import React, { useState } from "react";
import TextInput from "@sinoui/core/TextInput";
import Select from "@sinoui/core/Select";
import { Form, FormItem } from "@sinoui/rx-core-form";
import { Row, Column } from "@sinoui/core/Grid";
import "./config-tools.css";
import Button from "@sinoui/core/Button";
import genConfigFiles from "./genConfigFiles";
import PasswordInput from "../components/password-input";
import useConfigToolsState, { defaultConfig } from "./useConfigToolsState";
import { FormValueMonitor } from "@sinoui/rx-form-state";
import ssoServerUrlValidateFn from "./ssoServerUrlValidateFn";

const defaultDbUrl = {
  mysql:
    "jdbc:mysql://127.0.0.1:3306/form?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&useSSL=false",
  oracle: "jdbc:oracle:thin:@127.0.0.1:1521/form",
  kingbase: "jdbc:kingbase://127.0.0.1:54323/form",
  dm: "jdbc:dm://127.0.0.1:5236",
};

const defaultSinoMatrixDbUrl = {
  mysql:
    "jdbc:mysql://127.0.0.1:3306/sinoepuias?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&useSSL=false&allowPublicKeyRetrieval=true",
  oracle: "jdbc:oracle:thin:@127.0.0.1:1521/sinoepuias",
  kingbase: "jdbc:kingbase://127.0.0.1:54323/sinoepuias",
  dm: "jdbc:dm://127.0.0.1:5236",
};

/**
 * 配置生成工具
 */
const ConfigTools = () => {
  const formState = useConfigToolsState();

  useState(() => {
    formState.addRelyRule(
      ["db.type", "sinomatrix.dataSourceConfig.type"],
      (draft) => {
        draft.db.url = defaultDbUrl[draft.db.type];
        draft.sinomatrix.dataSourceConfig.url =
          defaultSinoMatrixDbUrl[draft.sinomatrix.dataSourceConfig.type];
      }
    );
  }, [formState]);

  return (
    <div className="config-tools">
      <h4>应用配置</h4>
      <Form variant="outlined" labelLayout="floating" formState={formState}>
        <FormValueMonitor>
          {(value) =>
            value.port !== "8085" ? (
              <FormItem name="port" label="智能表单应用端口号">
                <TextInput
                  type="number"
                  helperText="此端口需要与nginx配置中的sinoform_web_app端口保持一致"
                />
              </FormItem>
            ) : (
              <FormItem name="port" label="智能表单应用端口号">
                <TextInput type="number" />
              </FormItem>
            )
          }
        </FormValueMonitor>

        <h4>关系型数据库配置</h4>
        <Row gutter={8}>
          <Column md={6} xs={24}>
            <FormItem name="db.type" label="数据库类型">
              <Select allowClear={false}>
                <option value="mysql">MySQL</option>
                <option value="oracle">Oracle</option>
                <option value="kingbase">人大金仓</option>
                <option value="dm">达梦</option>
              </Select>
            </FormItem>
          </Column>
          <Column md={18} xs={24}>
            <FormItem name="db.url" label="数据库链接">
              <TextInput helperText="建议智能表单和业务系统使用同一个数据库，示例中给出的数据库form 如果不存在，可以换成业务系统数据库，或者创建一个新的form " />
            </FormItem>
          </Column>

          <Column md={12} xs={24}>
            <FormItem name="db.username" label="数据库用户名">
              <TextInput />
            </FormItem>
          </Column>
          <Column md={12} xs={24}>
            <FormItem name="db.password" label="数据库密码">
              <PasswordInput />
            </FormItem>
          </Column>
        </Row>

        <h4>sinomatrix数据库数据源配置</h4>
        <Row gutter={8}>
          <Column md={6} xs={24}>
            <FormItem
              name="sinomatrix.dataSourceConfig.type"
              label="数据库类型"
            >
              <Select allowClear={false}>
                <option value="mysql">MySQL</option>
                <option value="oracle">Oracle</option>
                <option value="kingbase">人大金仓</option>
                <option value="dm">达梦</option>
              </Select>
            </FormItem>
          </Column>

          <Column md={18} sm={18} xs={24}>
            <FormItem name="sinomatrix.dataSourceConfig.url" label="数据源地址">
              <TextInput />
            </FormItem>
          </Column>
          <Column md={12} xs={24}>
            <FormItem
              name="sinomatrix.dataSourceConfig.username"
              label="数据库用户名"
            >
              <TextInput />
            </FormItem>
          </Column>
          <Column md={12} xs={24}>
            <FormItem
              name="sinomatrix.dataSourceConfig.password"
              label="数据库密码"
            >
              <PasswordInput />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem
              name="sinomatrix.dataSourceConfig.initialSize"
              label="初始连接数"
            >
              <TextInput type="number" />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem
              name="sinomatrix.dataSourceConfig.minIdle"
              label="最小连接池数量"
            >
              <TextInput type="number" />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem
              name="sinomatrix.dataSourceConfig.maxActive"
              label="最大连接池数量"
            >
              <TextInput type="number" />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem
              name="sinomatrix.dataSourceConfig.maxWait"
              label="获取连接时最大等待时间"
            >
              <TextInput type="number" helperText="单位毫秒" />
            </FormItem>
          </Column>
        </Row>

        <h4>mongodb 数据库配置</h4>
        <Row gutter={8}>
          <Column md={6} sm={12} xs={24}>
            <FormItem name="mongodb.host" label="mongodb 地址">
              <TextInput />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem name="mongodb.port" label="mongodb 端口号">
              <TextInput type="number" />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem name="mongodb.username" label="mongodb 用户名">
              <TextInput placeholder="用户名可以为空" />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem name="mongodb.password" label="mongodb 密码">
              <PasswordInput placeholder="密码可以为空" />
            </FormItem>
          </Column>
        </Row>

        <h4>sinomatrix 集成配置</h4>
        <Row gutter={8}>
          <Column md={6} sm={12} xs={24}>
            <FormItem
              name="sinomatrix.ssoServerUrl"
              label="单点登录链接"
              validate={ssoServerUrlValidateFn}
            >
              <TextInput placeholder={defaultConfig.sinomatrix.ssoServerUrl} />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem
              name="sinomatrix.workflowDesignServerUri"
              label="工作流设计器服务"
            >
              <TextInput
                placeholder={defaultConfig.sinomatrix.workflowDesignServerUri}
              />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem name="sinomatrix.workflowServerUri" label="工作流服务">
              <TextInput
                placeholder={defaultConfig.sinomatrix.workflowServerUri}
              />
            </FormItem>
          </Column>
          <Column md={6} sm={12} xs={24}>
            <FormItem name="sinomatrix.uiasServerUri" label="uias服务">
              <TextInput placeholder={defaultConfig.sinomatrix.uiasServerUri} />
            </FormItem>
          </Column>
        </Row>
      </Form>

      <Button raised onClick={() => genConfigFiles(formState)}>
        生成配置文件
      </Button>
    </div>
  );
};

export default ConfigTools;
