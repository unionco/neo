
// export const breakpoints: { [key: string]: number } = {
//   sm: 360,
//   md: 768,
//   lg: 1024,
//   xl: 1440,
// };

// const roundTo3 = (num: number): number => (Math.round(num * 1000) / 1000);

// const sortNumeric = (a: number, b: number) => a - b;
// const sortFirst = (a: number, b: number) => sortNumeric(a[0], b[0]);

// const normalizeValue = (value: any) => {
//   if (Array.isArray(value)) {
//     return value;
//   }
//   if (value in breakpoints) {
//     return breakpoints[value];
//   }
//   if (typeof value === 'number') {
//     return value;
//   }
//   if (value.endsWith('px')) {
//     return parseInt(value, 10);
//   }
//   if (value.endsWith('em')) {
//     return parseInt(value, 10) * 16;
//   }
//   return Number(value);
// }

// const normalizeWithOrig = (value: any): any => [normalizeValue(value), value];

// const calcParts = (from: any, to: any) => {
//   if (from.size !== to.size && to.bp !== from.bp + 1) {
//     const slope = roundTo3((to.size - from.size) / (to.bp - from.bp));
//     let yIntercept = roundTo3(from.size - (from.bp * slope));

//     return {
//       slope: `${slope * 100}vw`,
//       yIntercept: yIntercept && `${yIntercept}px`
//     }
//   }

//   return {
//     slope: 0,
//     yIntercept: `${from.size}px`,
//   };
// }

// export const createCalc = (from: any, to: any) => {
//   const { slope, yIntercept } = calcParts(from, to);

//   if (slope && yIntercept) {
//     return `calc(${slope} + ${yIntercept})`;
//   }

//   return slope || yIntercept;
// }

// const createTransformCalc = (from: any, to: any) => (
//   from.size.map((fromProp, i) => {
//     const prop = Object.keys(fromProp)[0];
//     const fromValue = fromProp[prop];
//     const toValue = to.size[i][prop];

//     const { slope, yIntercept } = calcParts({ bp: from.bp, size: fromValue }, { bp: to.bp, size: toValue });

//     if (slope && yIntercept) {
//       return `${prop}(${slope}) ${prop}(${yIntercept})`;
//     }

//     return `${prop}(${slope || yIntercept})`;
//   }).join(' ')
// );

// const createTransformClamp = size => (
//   size.map((s) => {
//     const prop = Object.keys(s)[0];
//     const value = s[prop];

//     return `${prop}(${value}px)`;
//   }).join(' ')
// );

// const slopeCalc = breakpoints => {
//   const breaks = [0];
//   const breakById = { 0: [] };

//   Object.keys(breakpoints).forEach(prop => {
//     Object
//       .keys(breakpoints[prop])
//       .map(normalizeWithOrig)
//       .sort(sortFirst)
//       .reduce((prev, [bp, origBp]) => {
//         if (!breakById[bp]) {
//           breaks.push(bp);
//           breakById[bp] = [];
//         }

//         if (!prev.bp) {
//           prev.index = breakById[0].push({ prop }) - 1;
//         }

//         const index = breakById[bp].push({
//           prop,
//           from: {
//             bp,
//             size: normalizeValue(breakpoints[prop][origBp]),
//             index: breakById[bp].length,
//           },
//         }) - 1;

//         return breakById[prev.bp][prev.index].to = breakById[bp][index].from;
//       },
//       { bp: 0 },
//     );
//   });

//   return breaks.sort(sortNumeric).reduce((acc, bp) => {
//     let styles = breakById[bp].reduce((css, data) => {
//       let value;

//       if (!data.from) {
//         value = data.prop === 'transform' ? createTransformClamp(data.to.size) : `${data.to.size}px`;
//       } else if (!data.to) {
//         value = data.prop === 'transform' ? createTransformClamp(data.from.size) : `${data.from.size}px`;
//       } else {
//         value = (data.prop === 'transform' ? createTransformCalc : createCalc)(data.from, data.to);
//       }

//       return css + `  ${data.prop}: ${value};\n`
//     }, '');

//     if (bp) {
//       styles = `@media (min-width: ${bp / 16}em) {\n${styles}}\n`;
//     }

//     return acc + styles
//   }, '');
// }

// export default function expose(arg: string|Array<any>) {
//   if (typeof arg === 'string') {
//     return bp => slopeCalc({ [arg]: bp })
//   }
//   if (Array.isArray(arg)) {
//     return bp => slopeCalc(arg.reduce((acc, prop) => ({ [prop]: bp, ...acc }), {}))
//   }
//   return slopeCalc(arg);
// }

// export const fontSize = expose('font-size');
