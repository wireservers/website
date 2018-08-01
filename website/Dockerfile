FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk-nanoserver-1709 AS build
WORKDIR /src
COPY website/website.csproj website/
RUN dotnet restore website/website.csproj
COPY . .
WORKDIR /src/website
RUN dotnet build website.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish website.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "website.dll"]
