import React, { Component } from "react";
import { Generate } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
//import {vanillaRenderers, vanillaCells, JsonFormsStyleContext } from '@jsonforms/vanilla-renderers';
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

const _schema = {
  type: "object",
  properties: {
    allNormal: {
      type: "boolean",
    },
    Atrophy: {
      type: "boolean",
    },
    Atrophytype: {
      type: "string",
      enum: ['Age Related Cerebral Atrophy', 'Age Advanced Cerebral Atrophy']
    },


    ChronicIschemic: {
      type: 'boolean',
    },

    Infarct: {
      type: "boolean",
    },
    TypeofInfarct: {
      type: "boolean",
    },
    typeofInfarct: {
      type: "string",
      enum: ['Acute', 'Subacute', 'Chronic', 'Chronic Lacunar'],
    },

    Location: {
      type: "boolean",
    },
    LocationType: {
      type: "string",
      enum: ['right', 'left'],
    },
    Frontal: {
      type: "boolean",
    },
    Parietal: {
      type: "boolean",
    },
    Temporal: {
      type: "boolean",
    },
    Occipital: {
      type: "boolean",
    },
    BasalGanglia: {
      type: "boolean",
    },
    Thalamus: {
      type: "boolean",
    },
    CoronaRadiate: {
      type: "boolean",
    },
    CentrumSemiovale: {
      type: 'boolean',
    },

    Cerebellum: {
      type: "boolean",
    },
    Pons: {
      type: 'boolean',
    },

    Medulla: {
      type: "boolean",
    },
    Midbrain: {
      type: "boolean",
    },
    HemorrhagicTransFormation: {
      type: "boolean",
    },
    HemorrahagicTransformationCC: {
      type: 'string',
    },
    HemorrahagicTransformationAP: {
      type: 'string',
    },
    HemorrahagicTransformationTR: {
      type: 'string',
    },








  },
  required: ['typeofInfarct', 'LocationType', 'Atrophytype'],
};
const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Group",
      elements: [

        // normal
        {
          type: "Control",
          label: "Normal?",
          scope: "#/properties/allNormal",
        },

        {
          type: "Control",
          label: "Atrophy",
          scope: "#/properties/Atrophy",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/Atrophy",
              schema: {
                const: false,
              },
            },
          },
          elements: [
            {
              type: "VerticalLayout",
              label: "",
              elements: [
                {
                  type: "Control",
                  label: "",
                  scope: "#/properties/Atrophytype",
                  options: {
                    format: "radio",
                  },
                },
              ],
            },
          ],
        },

        {
          type: "Control",
          label: "Chronic ischemic changes",
          scope: "#/properties/ChronicIschemic",
        },

        {
          type: "Control",
          label: "Infarct",
          scope: "#/properties/Infarct",
        },
        {
          type: "Group",
          label: "",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/Infarct",
              schema: {
                const: false,
              },
            },
          },
          elements: [
            {
              type: "VerticalLayout",
              label: "",
              elements: [
                {
                  type: "Control",
                  label: "Type of Infarct*",
                  scope: "#/properties/TypeofInfarct",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/TypeofInfarct",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "HorizontalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: " ",
                          scope: "#/properties/typeofInfarct",
                          options: {
                            format: "radio",
                          },
                        },
                      ],
                    },
                  ],
                },

                {
                  type: "Control",
                  label: "Location*",
                  scope: "#/properties/Location",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/Location",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "HorizontalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "",
                          scope: "#/properties/LocationType",
                          options: {
                            format: "radio",
                          },
                        },
                      ],
                    },
                    {
                      type: "Group",
                      label: "",
                      rule: {
                        effect: "HIDE",
                        condition: {
                          scope: "#/properties/LocationType",
                          schema: { enum: ["", undefined] },
                        },
                      },
                      elements: [
                        {
                          type: "HorizontalLayout",
                          label: "",
                          elements: [
                            {
                              type: "HorizontalLayout",
                              label: "",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Frontal",
                                  scope: "#/properties/Frontal",
                                },
                                {
                                  type: "Control",
                                  label: "Parietal",
                                  scope: "#/properties/Parietal",
                                },
                                {
                                  type: "Control",
                                  label: "Temporal",
                                  scope: "#/properties/Temporal",
                                },
                                {
                                  type: "Control",
                                  label: "Occipital",
                                  scope: "#/properties/Occipital",
                                },
                                {
                                  type: "Control",
                                  label: "Basal Ganglia",
                                  scope: "#/properties/BasalGanglia",
                                },
                                {
                                  type: "Control",
                                  label: "Thalamus",
                                  scope: "#/properties/Thalamus",
                                },
                                {
                                  type: "Control",
                                  label: "Corona Radiate",
                                  scope: "#/properties/CoronaRadiate",
                                },
                                {
                                  type: "Control",
                                  label: "centrum Semiovale",
                                  scope: "#/properties/CentrumSemiovale",
                                },
                                {
                                  type: "Control",
                                  label: "Cerebellum",
                                  scope: "#/properties/Cerebellum",
                                },
                                {
                                  type: "Control",
                                  label: "Pons",
                                  scope: "#/properties/Pons",
                                },
                                {
                                  type: "Control",
                                  label: "Medulla",
                                  scope: "#/properties/Medulla",
                                },
                                {
                                  type: "Control",
                                  label: "Mid Brain",
                                  scope: "#/properties/Midbrain",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },

                {
                  type: "Control",
                  label: "Hemorrhagic transformation ",
                  scope: "#/properties/HemorrhagicTransFormation",
                },
                {
                  type: "Group",
                  label: "",
                  rule: {
                    effect: "HIDE",
                    condition: {
                      scope: "#/properties/HemorrhagicTransFormation",
                      schema: {
                        const: false,
                      },
                    },
                  },
                  elements: [
                    {
                      type: "HorizontalLayout",
                      label: "",
                      elements: [
                        {
                          type: "Control",
                          label: "CC",
                          scope: "#/properties/HemorrahagicTransformationCC",
                        },
                        {
                          type: "Control",
                          label: "AP",
                          scope: "#/properties/HemorrahagicTransformationAP",
                        },
                        {
                          type: "Control",
                          label: "TR",
                          scope: "#/properties/HemorrahagicTransformationTR",
                        },



                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const styleContextValue = {
  styles: [
    {
      name: "control.input",
      classNames: ["custom-input"],
    },
    {
      name: "control.select",
      classNames: ["select", "select-box"],
    },
    {
      name: "array.button",
      classNames: ["custom-array-button"],
    },
  ],
};
export default class Form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      schema: _schema,
    };
  }

  componentDidUpdate() { }

  handleForm(data) {
    const { schema } = this.state;
    this.setState(data, () => {
      this.props.handleChange(data, false);
    });
  }

  render() {
    const { data, schema } = this.state;
    return (
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        ValidationMode="ValidateAndShow"
        onChange={({ data, _errors }) => this.handleForm(data)}
      />
    );
  }
}
