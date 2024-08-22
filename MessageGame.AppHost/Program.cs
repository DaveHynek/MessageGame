var builder = DistributedApplication.CreateBuilder(args);

var weatherApi = builder.AddProject<Projects.MessageGame_MinimalApi>("weatherapi")
    .WithExternalHttpEndpoints();

builder.AddNpmApp("angular", "../MessageGame.Angular")
    .WithReference(weatherApi)
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
