import React from 'react';

export interface Props {
}

const FontFamilyTable:React.FC<Props> =() => {
  return (
      <div className="overflow-y-auto scrollbar-w-2 mb-4 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
          <table className="w-full text-left border-collapse">
              <thead>
              <tr>
                  <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0">
                      <div className="pb-2 pr-2 border-b border-gray-200">Class</div>
                  </th>
                  <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0">
                      <div className="pb-2 pl-2 border-b border-gray-200">Properties</div>
                  </th>
              </tr>
              </thead>
              <tbody className="align-baseline">
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap"
                  >
                      font-sans
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre"
                  >
                      font-family: ui-sans-serif, system-ui, -apple-system,
                      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto
                      Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI
                      Symbol", "Noto Color Emoji";
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      font-serif
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times,
                      serif;
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      font-mono
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                      "Liberation Mono", "Courier New", monospace;
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
)
}

export default FontFamilyTable;
