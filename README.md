# lighthouse-cloudfunction

This should help anyone add lighthouse via a cloud function as well as cover some more advanced use cases.

```sh
gcloud functions deploy lighthouse --runtime nodejs12 --trigger-http --memory=2048MB --set-env-vars SECRET=mysecret
```

## Advanced usage:

### Getting a Static IP

Staging environments may require a static IP to be allowlisted. This is pretty straightforward with this guide:

[AlvarDev: cloud functions static ip guide](https://github.com/AlvarDev/functions-static-ip)