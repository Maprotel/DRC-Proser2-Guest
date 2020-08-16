import { dateToDatePicker } from "shared/functions";

import * as moment from "moment";

export class UserSelectionModel {
  title: any;
  entity_selection: any;
  options: any;
  legend: any;
  mode: any;
  type: any;

  start_date: any;
  end_date: any;

  start_time: any;
  end_time: any;

  login: any;

  auxiliar: any;
  assignation: any;

  client: any;
  queue: any;
  service: any;
  campaign: any;

  supervisor: any;
  agent: any;

  role: any;
  schedule: any;

  last_minutes: any;
  interval: any;

  groupBy: any;
  orderBy: any;
  limitBy: any;

  status: any;

  start_time_hour: any;
  end_time_hour: any;

  views: any;
  creation_time: any;
  creation_date: any;

  current_date: any;

  constructor(option?) {
    if (!option) {
      this.title = "Título";
      this.entity_selection = "Seleccción";
      this.options = "Opciones";
      this.legend = "Leyenda";
      this.start_date = dateToDatePicker(moment().format("YYYY-MM-DD"));
      this.end_date = dateToDatePicker(moment().format("YYYY-MM-DD"));

      // OBJECTCS
      this.mode = { id: 1, name: "Historic", value: true };
      this.type = { id: 0, name: "Ejecutado" };
      this.start_time = { id: 0, value: "00:00:00" };
      this.end_time = { id: 0, value: "23:59:59" };
      this.login = { id: 0, name: "username", profile: "profile" };
      this.last_minutes = null; // {}; //{ id: 0, name: "no time", value: 0 };
      this.interval = null; //{}; //{ id: 0, name: "no time", value: 0 };
      this.groupBy = {
        id: 3,
        name: "COLA",
        Inv_id: "inv_queue_id",
        Inv_name: "inv_queue_name",
        MainCallEntry_json_id:
          'JSON_UNQUOTE(JSON_EXTRACT(callentry_operation_json, "$.queue[0].id"))',
        MainCdr_json_id:
          'JSON_UNQUOTE(JSON_EXTRACT(cdr_operation_json, "$.queue[0].id"))',
        MainAudit_json_id:
          'JSON_UNQUOTE(JSON_EXTRACT(audit_operation_json, "$.queue[0].id"))',
      };
      this.orderBy = {}; //{}; //{ id: 0, name: "orderBy" };
      this.limitBy = {}; //{}; //{ id: 0, name: "limitBy" };
      this.status = { id: 0, name: "Activo", value: "A" };

      //ARRAY
      this.client = []; // [{ id: 0, name: "client" }];
      this.queue = []; // [{ id: 0, name: "queue" }];
      this.service = []; //  [{ id: 0, name: "service" }];
      this.campaign = []; // [{ id: 0, name: "campaign" }];

      this.supervisor = []; // [{ id: 0, name: "supervisor" }];
      this.agent = []; // [{ id: 0, name: "agent" }];
      this.role = []; // [{ id: 0, name: "role" }];
      this.schedule = []; // [{ id: 0, name: "schedule" }];
      this.auxiliar = []; // [{ id: 0, name: "auxiliar" }];
      this.assignation = []; // [{ id: 0, name: "assignation" }];

      this.start_time_hour = {
        hour: 0,
        minute: 0,
        second: 0,
        value: "00:00:00",
      };
      this.end_time_hour = {
        hour: 23,
        minute: 59,
        second: 59,
        value: "23:59:59",
      };

      this.views = [
        { id: 1, name: "dashbord", time: 30, option: "actual" },
        { id: 1, name: "graph", time: 30 },
        { id: 1, name: "group", time: 30, option: "COLAS" },
        { id: 1, name: "dashbord", time: 30, option: "historic" },
      ];

      this.creation_date = moment().format("YYYY-MM-DD");
      this.creation_time = moment().format("hh:mm:ss");
      this.current_date = dateToDatePicker(moment().format("YYYY-MM-DD"));
    }

    if (option == "visibility") {
      this.title = true;
      this.entity_selection = true;
      this.options = true;
      this.legend = true;
      this.start_date = true;
      this.end_date = true;

      // OBJECTCS
      this.mode = true;
      this.type = true;
      this.start_time = true;
      this.end_time = true;
      this.login = { id: 0, name: "username", profile: "profile" };
      this.last_minutes = true;
      this.interval = true;
      this.groupBy = true;
      this.orderBy = true;
      this.limitBy = true;
      this.status = true;

      //ARRAY
      this.client = true;
      this.queue = true;
      this.service = true;
      this.campaign = true;

      this.supervisor = true;
      this.agent = true;
      this.role = true;
      this.schedule = true;
      this.auxiliar = true;
      this.assignation = true;

      this.start_time_hour = true;
      this.end_time_hour = true;

      this.views = true;

      this.creation_date = true;
      this.creation_time = true;
      this.current_date = true;

      this.login = true;
    }
  }
}

export class UserSelectionVisibleAreasModel {
  date: boolean;
  interval: boolean;
  options: boolean;
  buttons: boolean;

  constructor() {
    this.date = true;
    this.interval = true;
    this.options = true;
    this.buttons = true;
  }
}
