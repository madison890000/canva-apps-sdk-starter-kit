declare module "*.css" {
  const styles: { [className: string]: string };
  export = styles;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<{
    size?: "tiny" | "small" | "medium" | "large";
    className?: string;
  }>;
  export default content;
}

declare const BACKEND_HOST: string;
declare const MOCK_WINDOW_CANVA: boolean;

interface Window {
  canva: {
    export: any;
    designInteraction: {
        addNativeElement:any;
        addAudioTrack:any;
        getCurrentPageContext:any;
        initAppElement:any;
    };
    dragAndDrop:any;
  };
}
