import React from "react";
import { Form, FormItem } from "@sinoui/rx-core-form";
import { Row, Column } from "@sinoui/core/Grid";
import TextInput from "@sinoui/core/TextInput";
import { FormValueMonitor, useFieldValue } from "@sinoui/rx-form-state";
import InputAdornment from "@sinoui/core/InputAdornment";
import Url from "./Url";
import useCacheableFormState from "../hooks/useCacheableFormState";

const omitEmptyKeys = (obj: Record<string, any>) => {
  return Object.entries(obj)
    .filter(([, value]) => value != null && value.trim() !== "")
    .reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
};

const FormAppUrl = () => {
  const baseUrl = useFieldValue<string>("baseUrl");
  const appId = useFieldValue<string>("appId");
  const subtitle = useFieldValue<string>("subtitle");
  const appBarBgColor = useFieldValue<string>("appBarBgColor");
  const appBarBgUrl = useFieldValue<string>("appBarBgUrl");
  const logo = useFieldValue<string>("logo");
  const titleImg = useFieldValue<string>("titleImg");
  const titleXPos = useFieldValue<string>("titleXPos");
  const titleYPos = useFieldValue<string>("titleYPos");

  const params = {
    subtitle,
    appBarBgColor,
    appBarBgUrl,
    logo,
    titleImg,
    titleXPos,
    titleYPos,
  };

  return (
    <Url
      base={`http://${
        baseUrl ? baseUrl : "<智能表单系统地址>"
      }/intellisense-form/app/${appId ? appId : "<应用id>"}/home`}
      params={omitEmptyKeys(params)}
    />
  );
};

const FORM_APP_URL_CONFIG_CACHE_NAME = "FORM_APP_URL_CONFIG";

const FormAppUrlGenerator: React.FC = () => {
  const formState = useCacheableFormState(FORM_APP_URL_CONFIG_CACHE_NAME, {
    baseUrl: "192.168.100.231",
    appId: "61dd5330981d24212360db83",
  });

  return (
    <div>
      <Form variant="outlined" labelLayout="floating" formState={formState}>
        <Row gutter={8}>
          <Column xs={24}>
            <FormItem name="baseUrl" label="智能表单系统地址" required>
              <TextInput
                placeholder="127.0.0.1:8080"
                startAdornment={
                  <InputAdornment position="start">http://</InputAdornment>
                }
              />
            </FormItem>
          </Column>
          <Column md={8} xs={24}>
            <FormItem
              name="appId"
              required
              label="应用id"
              helperText={
                <>
                  请参考<a href="#获取应用-id">获取应用id</a>
                </>
              }
            >
              <TextInput placeholder="请输入应用id，例如：61dd5330981d24212360db83" />
            </FormItem>
          </Column>
          <Column md={8} xs={24}>
            <FormItem name="subtitle" label="副标题">
              <TextInput />
            </FormItem>
          </Column>
          <Column md={8} xs={24}>
            <FormItem
              name="appBarBgColor"
              label="顶部工具栏背景色"
              helperText={
                <FormValueMonitor path="appBarBgColor">
                  {(color) =>
                    color ? (
                      <div
                        style={{
                          backgroundColor: color,
                          width: 100,
                          height: 16,
                        }}
                      ></div>
                    ) : null
                  }
                </FormValueMonitor>
              }
            >
              <TextInput />
            </FormItem>
          </Column>
          <Column xs={24}>
            <FormItem name="logo" label="徽标链接（logo）">
              <TextInput />
            </FormItem>
          </Column>
          <Column xs={24}>
            <FormItem
              name="appBarBgUrl"
              label="顶部工具栏背景图链接（appBarBgUrl）"
            >
              <TextInput />
            </FormItem>
          </Column>
          <Column xs={24}>
            <FormItem
              name="titleImg"
              label="包含徽标和副标题的图片链接（titleImg）"
            >
              <TextInput />
            </FormItem>
          </Column>
          <Column md={12} xs={24}>
            <FormItem name="titleXPos" label="标题水平位置（titleXPos）">
              <TextInput
                type="number"
                placeholder="默认为 64 px"
                endAdornment={
                  <InputAdornment position="end">px</InputAdornment>
                }
              />
            </FormItem>
          </Column>
          <Column md={12} xs={24}>
            <FormItem name="titleYPos" label="标题垂直位置（titleYPos）">
              <TextInput
                type="number"
                placeholder="默认为 16 px"
                endAdornment={
                  <InputAdornment position="end">px</InputAdornment>
                }
              />
            </FormItem>
          </Column>
        </Row>
        <strong>应用首页链接：</strong>
        <FormAppUrl />
      </Form>
    </div>
  );
};

export default FormAppUrlGenerator;
