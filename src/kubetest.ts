
import * as Kube from "./index.ts"


async function main() {
    let conf = new Kube.Configuration();
    // let api = new Kube.AppsApi(conf);
    // let api = new Kube.BaseAPI(conf);
    let api = new Kube.CoreV1Api(conf);
    let resp = await api.listCoreV1Namespace({ pretty: "true" });
    console.log(resp);

}

main();

