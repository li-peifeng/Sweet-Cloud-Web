import { Button, HStack } from "@hope-ui/solid"
import { createSignal } from "solid-js"
import { useT, useLink } from "~/hooks"
import { objStore } from "~/store"
import { api, baseName, safeBtoa } from "~/utils"
import { FileInfo } from "./info"
import { Download } from "./download"

  const Ipa = () => {
  const t = useT()
  const [installing, setInstalling] = createSignal(false)
  const [trInstalling, setTrInstalling] = createSignal(false)
  const { currentObjLink } = useLink()
  const { copyCurrentRawLink } = useCopyLink()
  return (
    <FileInfo>
      <HStack spacing="$2">
        <Button as="a" href={objStore.raw_url} target="_blank">
          {t("home.preview.download")}
        </Button>
        <Button colorScheme="accent" onClick={() => copyCurrentRawLink(true)}>
          {t("home.toolbar.copy_link")}
        </Button>
        <Button
          as="a"
          href={
            "itms-services://?action=download-manifest&url=" +
            `${api}/i/${safeBtoa(
              encodeURIComponent(objStore.raw_url) +
                "/" +
                baseName(encodeURIComponent(objStore.obj.name)),
            )}.plist`
          }
          onClick={() => {
            setInstalling(true)
          }}
        >
          {t(`home.preview.${installing() ? "installing" : "install"}`)}
        </Button>
        <Button
          as="a"
          colorScheme="primary"
          href={
            "apple-magnifier://install?url=" +
            encodeURIComponent(currentObjLink(true))
          }
          onClick={() => {
            setTrInstalling(true)
          }}
        >
          {t(`home.preview.${trInstalling() ? "tr-installing" : "tr-install"}`)}
        </Button>
      </HStack>
    </FileInfo>
  )
}

export default Ipa
