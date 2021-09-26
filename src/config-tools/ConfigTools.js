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

const defaultDbUrl = {
  mysql:
    "jdbc:mysql://127.0.0.1:3306/form?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&useSSL=false",
  oracle: "jdbc:oracle:thin:@127.0.0.1:1521/form",
  kingbase: "jdbc:kingbase://127.0.0.1:54323/form",
  dm: "jdbc:dm://127.0.0.1:5236",
};

/**
 * 配置生成工具
 */
const ConfigTools = () => {
  const formState = useConfigToolsState();

  useState(() => {
    formState.addRelyRule(["db.type"], (draft) => {
      draft.db.url = defaultDbUrl[draft.db.type];
    });
  }, [formState]);

  return (
    <div className="config-tools">
      <h4>应用配置</h4>
      <Form variant="outlined" labelLayout="floating" formState={formState}>
        <FormItem name="port" label="智能表单应用端口号">
          <TextInput type="number" />
        </FormItem>

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
              <TextInput />
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
            <FormItem name="sinomatrix.ssoServerUrl" label="单点登录链接">
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

      <Button raised onClick={() => genConfigFiles(formState.values)}>
        生成配置文件
      </Button>
    </div>
  );
};

export default ConfigTools;
