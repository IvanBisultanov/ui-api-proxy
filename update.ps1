$currentDir = (Get-Item -Path ".\" -Verbose).FullName

docker run -it --rm -v "$($currentDir):/data" --add-host="localhost:10.0.75.1" apaleo/swagger-codegen /bin/bash /data/update_internal.sh 
