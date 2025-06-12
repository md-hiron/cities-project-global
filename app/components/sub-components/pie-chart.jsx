'use client';

import React, { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

export default function PieChart3D() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = am4core.create(chartRef.current, am4charts.PieChart3D);
    chart.innerRadius = am4core.percent(30);
    chart.depth = 20;

    chart.data = [
      { category: 'Business', value: 53 },
      { category: 'Education', value: 17 },
      { category: 'Family', value: 10 },
      { category: 'Government', value: 9 },
      { category: 'Media', value: 3 },
      { category: 'Art', value: 7 },
      { category: 'Religion', value: 1 },
    ];

    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'value';
    series.dataFields.category = 'category';

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }}></div>;
}
