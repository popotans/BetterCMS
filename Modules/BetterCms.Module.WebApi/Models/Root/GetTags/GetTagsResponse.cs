﻿using System.Runtime.Serialization;

namespace BetterCms.Module.WebApi.Models.Root.GetTags
{
    [DataContract]
    public class GetTagsResponse : ListResponseBase<TagModel>
    {
    }
}