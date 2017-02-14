$currentDir = (Get-Item -Path ".\" -Verbose).FullName

docker run -it --rm -v "$($currentDir):/data" apaleo/alpine-tooling /bin/bash /data/update.sh 
