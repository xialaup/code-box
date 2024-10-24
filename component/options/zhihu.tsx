import { useStorage } from "@plasmohq/storage/hook"

import DownloadHtml from "~component/items/downloadHtml"
import DownloadMarkdown from "~component/items/downloadMarkdown"
import EditMarkdown from "~component/items/editMarkdown"
import { i18n } from "~tools"

export default function Zhihu() {
  const [copyCode, setCopyCode] = useStorage("zhihu-copyCode", (v) =>
    v === undefined ? true : v
  )
  const [closeLoginModal, setCloseLoginModal] = useStorage(
    "zhihu-closeLoginModal",
    (v) => (v === undefined ? true : v)
  )
  const [autoOpenCode, setAutoOpenCode] = useStorage(
    "zhihu-autoOpenCode",
    (v) => (v === undefined ? true : v)
  )

  return (
    <fieldset>
      <legend>{i18n("zhihuConfig")}</legend>
      <div className="item">
        <span>{i18n("zhihuCopyCode")}</span>
        <input
          type="checkbox"
          id="zhihu-copyCode"
          name="zhihu-copyCode"
          className="codebox-offscreen"
          checked={copyCode}
          onChange={(e) => setCopyCode(e.target.checked)}
        />
        <label className="codebox-switch" htmlFor="zhihu-copyCode"></label>
      </div>
      <div className="item">
        <span>{i18n("zhihuCloseLoginModal")}</span>
        <input
          type="checkbox"
          id="zhihu-closeLoginModal"
          name="zhihu-closeLoginModal"
          className="codebox-offscreen"
          checked={closeLoginModal}
          onChange={(e) => setCloseLoginModal(e.target.checked)}
        />
        <label
          className="codebox-switch"
          htmlFor="zhihu-closeLoginModal"></label>
      </div>
      <div className="item">
        <span>{i18n("zhihuAutoOpenCode")}</span>
        <input
          type="checkbox"
          id="zhihu-autoOpenCode"
          name="zhihu-autoOpenCode"
          className="codebox-offscreen"
          checked={autoOpenCode}
          onChange={(e) => setAutoOpenCode(e.target.checked)}
        />
        <label className="codebox-switch" htmlFor="zhihu-autoOpenCode"></label>
      </div>
      <EditMarkdown name="zhihu"></EditMarkdown>
      <DownloadMarkdown name="weixin"></DownloadMarkdown>
      <DownloadHtml name="weixin"></DownloadHtml>
    </fieldset>
  )
}
