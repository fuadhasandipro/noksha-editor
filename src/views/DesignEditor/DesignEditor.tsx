import useEditorType from "~/hooks/useEditorType"
import SelectEditor from "./SelectEditor"
import GraphicEditor from "./GraphicEditor"
import PresentationEditor from "./PresentationEditor"
import VideoEditor from "./VideoEditor"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import Preview from "./components/Preview"
import ContextMenu from "./components/ContextMenu"
import { useEditor } from "@layerhub-io/react"

const DesignEditor = () => {
  const editorType = useEditorType()
  const { displayPreview, setDisplayPreview } = useDesignEditorContext()

  const editor = useEditor()

  console.log(editor);

  return (
    <>
      {displayPreview && <Preview isOpen={displayPreview} setIsOpen={setDisplayPreview} />}
      {
        {
          NONE: <SelectEditor />,
          PRESENTATION: <PresentationEditor />,
          VIDEO: <VideoEditor />,
          GRAPHIC: <GraphicEditor />,
        }[editorType]
      }
    </>
  )
}

export default DesignEditor
