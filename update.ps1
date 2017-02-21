param (
    [string]$hostname = ""
)

$currentDir = (Get-Item -Path ".\" -Verbose).FullName

docker run --rm -v "$($currentDir):/data" --add-host="localhost:10.0.75.1" apaleo/swagger-codegen /bin/bash /data/update_internal.sh $hostname
