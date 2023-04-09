// /**
//  * Default PDF Viewer sample
//  */
// import {
//   PdfViewerComponent,
//   Toolbar,
//   Magnification,
//   Navigation,
//   LinkAnnotation,
//   BookmarkView,
//   ThumbnailView,
//   Print,
//   TextSelection,
//   TextSearch,
//   Annotation,
//   FormFields,
//   FormDesigner,
//   Inject,
// } from "@syncfusion/ej2-react-pdfviewer";
// // import { SampleBase } from "./sample-base";
// const PDFviewerComp = () => {
//   return (
//     <div className="" style={{ backgroundColor: "white" }}>
//       <div className="control-section">
//         <PdfViewerComponent
//           id="container"
//           // documentPath="PDF_Succinctly.pdf"
//           documentPath="https://bluebinaries-my.sharepoint.com/:u:/r/personal/faisal_mahmood_bluebinaries_com/Documents/Microsoft%20Teams%20Chat%20Files/DTC_056016_Diagnostics_procedure.html?csf=1&web=1&e=Y5rbSC"
//           serviceUrl="https://bluebinaries-my.sharepoint.com/:u:/r/personal/faisal_mahmood_bluebinaries_com/Documents/Microsoft%20Teams%20Chat%20Files/DTC_056016_Diagnostics_procedure.html?csf=1&web=1&e=Y5rbSC"
//           //   serviceUrl="https://developmentbb.blob.core.windows.net/bcm/Fuse.gif"
//           // serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
//           toolbarSettings={{
//             showTooltip: true,
//             toolbarItems: [
//               "OpenOption",
//               "PanTool",
//               "AnnotationEditTool",
//               "FormDesignerEditTool",
//             ],
//             annotationToolbarItems: ["HandWrittenSignatureTool"],
//             formDesignerToolbarItems: ["TextboxTool", "PasswordTool"],
//           }}
//           style={{ height: "640px" }}
//         >
//           <Inject
//             services={[
//               Toolbar,
//               Magnification,
//               Navigation,
//               LinkAnnotation,
//               BookmarkView,
//               ThumbnailView,
//               Print,
//               TextSelection,
//               TextSearch,
//               Annotation,
//               FormFields,
//               FormDesigner,
//             ]}
//           />
//         </PdfViewerComponent>
//       </div>
//     </div>
//   );
// };
// export default PDFviewerComp;

// // const PDFviewerComp = () => {
// //   //   render() {
// //   return (
// //     <div>
// //       <div className="control-section">
// //         {/* Render the PDF Viewer */}
// //         <PdfViewerComponent
// //           id="container"
// //           documentPath="file:///C:/Users/2201-00205/Downloads/DTC_056016_Diagnostics_procedure.html"
// //           //   documentPath="PDF_Succinctly.pdf"
// //           //   serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
// //           serviceUrl="https://developmentbb.blob.core.windows.net/bcm/Fuse.gif"
// //           // style=>
// //           // <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
// //           // ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields]}
// //         ></PdfViewerComponent>
// //       </div>
// //     </div>
// //   );
// // };
// // export default PDFviewerComp;

// import PDFViewer from "pdf-viewer-reactjs";

// const PDFViewerComp = () => {
//   return (
//     <PDFViewer
//       document={{
//         // url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
//         url: "https://developmentbb.blob.core.windows.net/bcm/Fuse.gif",
//         // url: "https://developmentbb.blob.core.windows.net/bcm/DTC_056016_Diagnostics_procedure.pdf",
//       }}
//     />
//   );
// };

// export default PDFViewerComp;
