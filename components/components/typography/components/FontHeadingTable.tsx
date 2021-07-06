import React from 'react';


const FontHeadingTable:React.FC<{}> =() => {
  return (
      <div className="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch lg:max-h-sm">
          <table className="w-full text-left border-collapse">
              <thead>
              <tr>
                  <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0">
                      <div className="pb-2 pr-2 border-b border-gray-200">
                          Header
                      </div>
                  </th>
                  <th className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0">
                      <div className="pb-2 pl-2 border-b border-gray-200">
                          Style
                      </div>
                  </th>
              </tr>
              </thead>
              <tbody className="align-baseline">
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap"
                  >
                      Header 1
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre"
                  >
                      color: #1F2937; font-family: "Inter , ...rest"; font-weight: 900; margin: '24px 0 24px 0';  font-size: 60px;  line-height: 1;
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      Header 2
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      color: #1F2937; font-family: "Inter , ...rest"; font-weight: 800; margin: '20px 0 20px 0'; font-size: 48px;  line-height: 1;
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      Header 3
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      color: #374151; font-family: "Inter , ...rest"; font-weight: 700; margin: '16px 0 16px 0'; font-size: 36px;  line-height: 40px;
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      Header 4
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      color: #374151; font-family: "Inter , ...rest"; font-weight: 600; margin: '14px 0 14px 0'; font-size: 30px;  line-height: 36px;
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      Header 5
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      color: #374151; font-family: "Inter , ...rest"; font-weight: 500; margin: '14px 0 14px 0'; font-size: 24px;  line-height: 32px;
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      Header 6
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      color: #374151; font-family: "Inter , ...rest"; font-weight: 500; margin: '14px 0 14px 0'; font-size: 20px; line-height: 28px;
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      Paragraph
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      color: #374151; font-family: "Inter , ...rest"; font-weight: 400; font-size: 16px; line-height: 20px;
                  </td>
              </tr>
              <tr>
                  <td
                      translate="no"
                      className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap border-t border-gray-200"
                  >
                      Link
                  </td>
                  <td
                      translate="no"
                      className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre border-t border-gray-200"
                  >
                      color: #d82a77; font-family: "Inter , ...rest"; font-weight: 500; text-decoration: 'underline'; font-size: 16px; line-height: 20px;
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
)
}

export default FontHeadingTable;
