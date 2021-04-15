import Login from "@/view/Login";
import Home from "@/view/Home";
import HommePage from "@/view/Home/HomePage";

export default [
  {
    path: "/home",
    component: Home,
    children: [
      // 首页
      {
        path: "index",
        component: HommePage,
        meta: {
          title: "首页",
        },
      },
      // 设备管理
      {
        path: "equipment",
        component: () =>
          import(/* webpackChunkName:"equipment" */ "@/view/Home/Equipment"),
        meta: {
          title: "设备管理",
        },
      },
      // 谁被详情
      {
        path: "equipment/details",
        component: () =>
          import(
            /* webpackChunkName:'Details' */ "@/view/Home/Equipment/detail"
          ),
        meta: {
          title: "设备详情",
        },
      },
      // 数据统计
      {
        path: "datastatistics",
        component: () =>
          import(
            /* webpackChunkName:"Datastatistics" */ "@/view/Home/DataStatistics"
          ),
        meta: {
          title: "数据统计",
        },
      },
      // 耗材管理
      {
        path: "consumables",
        component: () =>
          import(
            /* webpackChunkName:"Consumables" */ "@/view/Home/Consumables"
          ),
        meta: {
          title: "耗材管理",
        },
      },
      // 客户管理
      {
        path: "customer",
        component: () =>
          import(/* webpackChunkName:"customer" */ "@/view/Home/Customer"),
        meta: {
          title: "客户管理",
        },
      },
      // 机型数据
      {
        path: "modeldata",
        component: () =>
          import(/* webpackChunkName:"ModelData" */ "@/view/Home/ModelData"),
        meta: {
          title: "机型数据",
        },
      },
      // 导出数据
      {
        path: "exportdata",
        component: () =>
          import(/* webpackChunkName:"ExportData" */ "@/view/Home/ExportData"),
        meta: {
          title: "机型数据",
        },
        children: [
          // 模板详情
          {
            path: "templatedeatils",
            component: () =>
              import(
                /* webpackChunkName:"TemplateDeatils" */ "@/view/Home/ExportData/TemplateDeatils"
              ),
          },
          // 设备膜码详情
          {
            path: "equipmentdetails",
            component: () =>
              import(
                /* webpackChunkName:"EquipmentDetails" */ "@/view/Home/ExportData/EquipmentDetails"
              ),
          },
          // 切膜型号
          {
            path: "cuttingmodel",
            component: () =>
              import(
                /* webpackChunkName:"CuttingModel" */ "@/view/Home/ExportData/CuttingModel"
              ),
          },
          // 设备切膜统计
          {
            path: "cuttingstatistics",
            component: () =>
              import(
                /* webpackChunkName:"CuttingStatistics" */ "@/view/Home/ExportData/CuttingStatistics"
              ),
          },
          {
            path: "/home/exportdata",
            redirect: "/home/exportdata/templatedeatils",
          },
        ],
      },
      // 系统设置
      {
        path: "systemsettings",
        component: () =>
          import(
            /* webpackChunkName:"SystemSettings" */ "@/view/Home/SystemSettings"
          ),
        meta: {
          title: "机型数据",
        },
        children: [
          {
            path: "datasettings",
            component: () =>
              import(
                /* webpackChunkName:"DataSettings" */ "@/view/Home/SystemSettings/DataSettings"
              ),
          },
          {
            path: "informaticasettings",
            component: () =>
              import(
                /* webpackChunkName:"InformaticaSettings" */ "@/view/Home/SystemSettings/InformaticaSettings"
              ),
          },
          {
            path: "/home/systemsettings",
            redirect: "/home/systemsettings/datasettings",
          },
        ],
      },
      // 服务指南
      {
        path: "serviceinformation",
        component: () =>
          import(
            /* webpackChunkName:"ServiceInformation" */ "@/view/Home/ServiceInformation"
          ),
        meta: {
          title: "机型数据",
        },
      },

      {
        path: "/home",
        redirect: "/home/index",
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/404",
    component: () => import(/* webpackChunkName: "404" */ "@/view/404"),
    meta: {
      title: "404",
    },
  },
  {
    path: "/",
    redirect: "/login",
  },
];
